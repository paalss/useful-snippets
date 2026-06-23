---
title: Create & apply patches
date: 2026-04-04T00:00:00Z
tags:
  - cli
---
&nbsp;

&nbsp;

&nbsp;

[https://stackoverflow.com/questions/2249852/how-to-apply-a-patch-generated-with-git-format-patch](First%20the%20stats:%20%20git%20apply%20--stat%20a_file.patch%20%20Then%20a%20dry%20run%20to%20detect%20errors:%20%20git%20apply%20--check%20a_file.patch%20%20Finally,%20you%20can%20use%20git%20am%20to%20apply%20your%20patch%20as%20a%20commit.%20This%20also%20allows%20you%20to%20sign%20off%20an%20applied%20patch.%20This%20can%20be%20useful%20for%20later%20reference.%20%20git%20am%20--keep-cr%20--signoff%20&lt;%20a_file.patch%20)

&nbsp;

First the stats:

```
git apply --stat a_file.patch
```

Then a dry run to detect errors:

```
git apply --check a_file.patch
```

Finally, you can use <a href="https://git-scm.com/docs/git-am" rel="noreferrer"><strong><code>git am</code></strong></a> to apply your patch as a commit. This also allows you to <a href="https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---signoff" rel="noreferrer">sign off</a> an applied patch.<br />This can be useful for later reference.

```
git am --keep-cr --signoff < a_file.patch
```