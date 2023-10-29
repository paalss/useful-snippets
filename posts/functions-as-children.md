---
title: Use functions as children
ranking: 3
tags:
- react
- javascript
---

Hvordan kan man lage et komponent som exposer en dataverdi som parent kan få tak i?

I.e. hvordan kan ChildComponent her gjøre dette lov?


```jsx
          <ChildComponent>
            {({idFromChild}) => {
              return (
                <Button
                  href={`link/to/${idFromChild}`}
                >
					click here
                </Button>
              );
            }}
          </ChildComponent>

```

Slik:

```jsx
export const ChildComponent = ({id}) => {
  return (
    <div>
      {children({
        id: id,
      })}
    </div>
  );
};
```
