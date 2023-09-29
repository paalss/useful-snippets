---
title: preserve aspect ratio for Nextjs images
---

<https://stackoverflow.com/questions/66845889/next-js-image-how-to-maintain-aspect-ratio-and-add-letterboxes-when-needed>

{%raw%}

```jsx
<div
  style={{
    position: "relative",
    width: "566px",
    height: "425px",
  }}
>
  <Image
    src={currCommit.image.url}
    alt="Current Image"
    layout={"fill"}
    style={{objectFit: "cover"}}
  />
</div>
```

{%endraw%}
