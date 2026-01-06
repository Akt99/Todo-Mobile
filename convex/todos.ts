import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const getTodos = query({
   handler: async (ctx) => {
       const todos_v2 = await ctx.db.query("todos_v2").order("desc").collect();
       return todos_v2;
   },
});

export const addTodo= mutation({
   args: {
       text: v.string()
   },
   handler: async (ctx, args) => {
       const todoId = await ctx.db.insert("todos_v2", { text: args.text, isCompleted: false });
       return todoId;
   },
});

export const toggleTodo = mutation({
   args: {
       id: v.id("todos_v2")},
       
   
   handler: async (ctx, args) => {
         const todo = await ctx.db.get(args.id);
            if (!todo) {    
                throw new ConvexError("Todo not found");
            }
         await ctx.db.patch(args.id, { isCompleted: !todo.isCompleted });
   },
});
export const deleteTodo = mutation({
   args: {id: v.id("todos_v2")},
   
   handler: async (ctx, args) => {
          
         await ctx.db.delete(args.id);
   },
});

export const updateTodo = mutation({        
    args: { 
        id: v.id("todos_v2"),
        text: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, { text: args.text });
    },
}); 

export const clearAllTodos = mutation({
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos_v2").collect();
        for (const todo of todos) {
            await ctx.db.delete(todo._id);
        }
        return { deletedCount: todos.length };
    },
}); 