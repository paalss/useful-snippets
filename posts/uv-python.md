---
title: UV python
tags:
  - python
  - uv
date: 2026-01-22
---

Docs: <https://docs.astral.sh/uv/>

---

Install Python version: <https://docs.astral.sh/uv/getting-started/features/#python-versions>

```sh
uv python install <version>
```

Uninstall python version

```sh
uv python uninstall <version> 
```

Initialize project

```sh
uv init
```

Set correct python version in `.python-version`

(re)-build venv

```sh
uv venv
```

Updates .venv files

Activate venv environment

```sh
source .venv/bin/activate
```

```sh
deactivate
```

Install dependencies from requirements.txt

```sh
uv pip install -r requirements.txt
```

Install one single dependency

```sh
uv python add <package> 
```

Run package command

```sh
uv run <command> 
```

