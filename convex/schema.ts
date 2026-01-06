import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    todos_v2: defineTable({
        text: v.string(),
        isCompleted: v.boolean(),
}),
})          