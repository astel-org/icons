export const formatComponentName = (componentName: string) => {
  return componentName.split('-').length > 1
    ? componentName
        .split('-')
        .map((name: string) => name.slice(0, 1).toUpperCase() + name.slice(1))
        .join('')
    : componentName.slice(0, 1).toUpperCase() + componentName.slice(1)
}
