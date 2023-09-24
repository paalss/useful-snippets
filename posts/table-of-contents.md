---
title: table of contents with IntersectionOvserver (not perfect)
tags:
- react
- javascript
---

**useScrollSpy.ts**

```ts
import { useEffect, useRef, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState();
  const observer = useRef();

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));

    observer.current?.disconnect();

    elements.forEach((heading) => {
      if (heading) {
        observer.current?.observe(heading);
      }
    });

    observer.current = new IntersectionObserver(
      (entries) => {
        console.group("executing intersectionobserver callback");

        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            console.log(entry.target.id, "is intersecting");

            setActiveId(entry.target.id);
          }
        });
        console.groupEnd();
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 0.1 }
    );

    return () => observer.current?.disconnect();
  }, [ids]);
  return activeId;
}
```

**TableOfContents.tsx**

```tsx
import React, { useEffect, useState } from "react";
import classes from "./TableOfContents.module.css";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface TableOfContentsProps {
  isLoading: boolean;
}

export type heading = { text: string | null; id: string };

export const TableOfContents = ({ isLoading }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<heading[]>([]);
  const activeId = useScrollSpy(headings.map(({ id }) => id));
  useEffect(() => {
    if (!isLoading) {
      const elements: heading[] = Array.from(
        document.querySelectorAll("h3")
      ).map((element) => ({ text: element.textContent, id: element.id }));
      setHeadings(elements);
    }
  }, [isLoading]);

  return (
    <div
      className={`${classes.root} d-none d-lg-block sticky-with-gutter list-group small`}
    >
      <nav>
        {headings.map((heading) => {
          const maybeActive = activeId === heading.id ? "active" : "";
          return (
            <li key={heading.id}>
              <a
                className={`list-group-item list-group-item-action ${maybeActive}`}
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </nav>
    </div>
  );
};
```
