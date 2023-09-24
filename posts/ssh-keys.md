---
title: SSH-keys
tags:
- github
- bitbucket
---

Hvordan opprette og bruke

# Github

Fint for å slippe å skrive inn brukernavn og passord hver eneste gang


1. `ssh-keygen`

```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/paalss/.ssh/id_rsa):

```
2. `[Enter]`

```
...
Your public key has been saved in /home/paalss/.ssh/id_rsa.pub
...
```

3. `cat /home/paalss/.ssh/id_rsa.pub`

```
ssh-rsa <Hererenlanghashcode> paalss@Asus-VivoBook
```

4. Gå til [Add new ssh keys](https://github.com/settings/ssh/new)

5. Lim inn `ssh-rsa <Hererenlanghashcode>`

Resten er rett frem

https://docs.oracle.com/en/cloud/cloud-at-customer/occ-get-started/generate-ssh-key-pair.html


## Blir du spurt om username og password (PAT) ved `git push`?

Da bruker du sannsynligvis HTTPS:

Slik bytter du til SSH:

`git remote set-url origin git@github.com:paalss/<repo>.git`


# Bitbucket

https://peter-whyte.com/setup-ssh-keys-in-wsl/

```sh
eval $(ssh-agent -s) && ssh-add ../pw_bitbucket
```

Personal Access Token for http
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
Kan brukes til authentication i stedet for passord

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

eller:

```sh
ssh-add ~/.ssh/github_pw
```
