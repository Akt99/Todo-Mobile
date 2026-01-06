import useTheme from '@/hooks/use-theme-color';
import { View, type ViewProps } from 'react-native';

type BackgroundKey = keyof ReturnType<
  typeof useTheme
>['colors']['backgrounds'];

export type ThemedViewProps = ViewProps & {
  backgroundKey?: BackgroundKey;
};

export function ThemedView({
  style,
  backgroundKey = 'input',
  ...otherProps
}: ThemedViewProps) {
  const { colors } = useTheme();

  const backgroundColor = colors.backgrounds[backgroundKey];

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
