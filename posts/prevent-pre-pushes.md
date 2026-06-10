---
title: Prevent pre-pushes
date: 2026-05-11
tags: 
- git-hooks
- pre-push
---



  read -p "Push anyway?" pushanyway
  if [[ $pushanyway == "y" ]]; then
    exit 0
  else
    exit 1
  fi


  -----

!!! FØR COMMIT !!!

TODO: lim inn innhold fra bashrc som er relevant (update_prepush og gitFlowFeatureStart)

det må også funke da. test i gittesting.

.------

relevant bashrc innhld her...

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# -------- Aliases -------

# stuff
alias c=clear
alias compare-home="yadm diff home2 | delta"

# ripgrep
alias ripgrep="rg"

# live ripgrep
alias p0="~/rvf.sh "
alias p="nn \$(fzf)"
alias pp="nn \$(fzf)"

# yadm (ohmyzsh style aliases)
alias yl="yadm pull"
alias yp="yadm push"
alias ya="yadm add"
alias yc="yadm commit --verbose"
alias yc!="yadm commit --verbose --amend"
alias ycn!="yadm commit --verbose --no-edit --amend"
alias ycan!="yadm commit --verbose --all --no-edit --amend"
alias yst="yadm status"
alias yss="yadm status --short"
alias yb="yadm branch"
alias yd="yadm diff"
alias yco="yadm checkout"
alias ylg="yadm log --stat"
alias ylo="yadm log --oneline --decorate"
alias ystl="yadm stash list "
alias ystaa="yadm stash apply"
alias ysta="yadm stash push"
alias ystp="yadm stash pop"

# yadm lazygit
alias ye="yadm enter lazygit"
alias yes="yadm enter lazygit status"
alias yesh="yadm enter azygit stash"
alias yel="yadm enter lazygit log"
alias yeb="yadm enter lazygit branch"

alias yu="yadm add -u"

alias grs="git restore --staged"

# alias yadmManaged="yadm list -a"
# alias yadmAddManaged="yadm add -u"

# zshrc/bashrc
alias bas="nvim ~/.zshrc"
alias zs="nvim ~/.zshrc"
alias basr=". ~/.zshrc" # source zshrc

# vim & nvim
alias n="nvim ."
alias nn="nvim"
# alias nf="nvim $(fzf)"
alias v="vim ."
alias vv="vim"
# alias vf="vim $(fzf)"

alias nnvim="cd ~/.config/nvim/ && rename_tmux_window Neovim"

alias idea="nvim ~/.ideavimrc"
alias vimrc="nvim ~/.vimrc"
alias rem="nvim ~/.config/nvim/lua/setup/remap.lua"
alias set="nvim ~/.config/nvim/lua/setup/set.lua"
alias aft="nvim ~/.config/nvim/after/plugin/"
alias use="nvim ~/code/useful-snippets/posts/"
alias surr="nvim ~/.config/nvim/after/plugin/vim-surround.lua"
alias diff="nvim ~/.config/nvim/after/plugin/diffview.lua"
alias fzfvim="nvim ~/.config/nvim/after/plugin/fzfvim.lua"
alias lsp="nvim ~/.config/nvim/after/plugin/"
# other
alias gi="nvim ~/.gitconfig"
alias bran="echo $(git branch --show-current) | pbcopy"

# function goto {
#   cd "$1"
#   rename_tmux_window "$2"
# }

# bare kjør denne her hvis alias value starter med å cd til et directory
# Hadde det bært bedre om man lagde en goto-funksjon og brukte det i stedet?
function rename_tmux_window {
  if [ -z "$TMUX" ]; then
    echo "Not in tmux, nothing to rename"
  else
    tmux rename-window "$1"
  fi
}


# filesystem navigation
alias cdc="cd ~/code"
alias cdtest="cd ~/code/test/ && rename_tmux_window test"
alias hybel="cd ~/code/hybel && rename_tmux_window HYBEL"
alias tenant="cd ~/code/tenant-frontend-app && rename_tmux_window TENANT"
alias tresults="cd ~/code/test/hybel-test-results-develop && rename_tmux_window test-results"
alias dresults="cd ~/code/dbdump-hybeldb2/ && rename_tmux_window db-results"
alias useful="cd ~/code/useful-snippets && rename_tmux_window useful-snippets"
alias u="cd ~/code/useful-snippets && rename_tmux_window useful-snippets && nvim"

# hybel
alias shybel="hybel && bash ~/start-hybel.sh"
alias stenant="tenant && bash ~/start-tenant.sh"
alias suseful="cd ~/code/useful-snippets && bash ~/start-useful.sh"
alias home="cd ~ && bash ~/start-home.sh && rename_tmux_window home"
alias snvim="nnvim"
alias stestcompare="cd ~/code/test/hybel-test-results-develop && bash ~/start-test-compare.sh"
# pre tenant tests
alias predisttest="tenant && bash ~/prepare-dist-test.sh"
alias presrctest="tenant && bash ~/prepare-src-test.sh"

# actions
alias q="exit"
alias e="open ."

# open websites
alias f1="explorer.exe http://localhost:5173/"
alias f2="explorer.exe http://localhost:8000/"
alias f3="explorer.exe http://localhost:5173/graphql/"
alias f4="explorer.exe http://localhost:6006/"
alias f5="explorer.exe http://localhost:3000/tenant/"

# npm scripts
alias dev="npm run dev"
alias compile="npm run compile"
alias tsc="npm run compile"
alias build="npm run build"
alias storybook="npm run storybook"
alias preview="npm run preview"
alias caddyrun="sudo caddy run --config Caddyfile"
alias i18nextract="npm run i18n:extract"
alias premerge=" ./_pre-merge-request.sh docker"
alias crr="coderabbit --plain --base origin/develop"

# tmux
alias t="tmux"
alias ntmux="nvim ~/.tmux.conf"
alias tmu="nvim ~/.tmux.conf"
alias tt="bash ~/dev-tmux.sh"

# lazygit
alias lg="lazygit"
alias lgs="lazygit status"
alias lgsh="lazygit stash"
alias lgl="lazygit log"
alias lgb="lazygit branch"


# 1: new branch name
function update_prepush {
  sed -i'' -e "s&allowed_branch_name=\".*\"&allowed_branch_name=\"$1\"&g" $(gitHookFull pre-push)
}

#1: name of git hook (e.g. pre-push, post-commit)
function gitHookFull {
  if [[ -f ".git/hooks/$1" ]]; then
    echo ".git/hooks/$1"
  else
    if [[ -f ".git/hooks/$1.sample" ]]; then
      echo ".git/hooks/$1.sample"
    else
      echo "undefined"
    fi
  fi
}

#1: name of git hook (e.g. pre-push, post-commit)
function gitHook {
  if [[ -f ".git/hooks/$1" ]]; then
    echo "$1"
  else
    if [[ -f ".git/hooks/$1.sample" ]]; then
      echo $1.sample
    else
      echo "undefined"
    fi
  fi
}

function isGitHookActivated {
  if [[ -f ".git/hooks/$1" ]]; then
    echo true
  else
    if [[ -f ".git/hooks/$1.sample" ]]; then
      echo false
    else
      echo "undefined"
    fi
  fi
}

function gitFlowFeatureStart {
  git flow feature start "$1"
  update_prepush "feature/$1"
}

# git flow
alias gffs="gitFlowFeatureStart"
alias gfrs="git flow release start"
alias gfhs="git flow hotfix start"
alias gfbs="git flow bugfix start" # bugfix dont exist
alias gfrf="git flow release finish"
alias gfhf="git flow hotfix finish"

# docker
alias dcu="docker compose --profile=django up django"
alias dcudjango="docker compose --profile=django up django"
alias dcr="docker compose --profile=manage run manage migrate"
alias dcs="docker compose --profile=manage run manage shell"
alias dcd="docker compose down"
alias dcdr="docker compose down --remove-orphans"

# skhd (Autohotkey)
alias ahk="skhd --start-service"
alias skh="skhd --start-service"
alias starts="skhd --start-service"
alias stops="skhd --stop-service"

alias vers="skhd --verbose"

alias nahk="nvim ~/.skhdrc"
alias nskh="nvim ~/.skhdrc"

alias activateprepush="mv .git/hooks/pre-push.sample .git/hooks/pre-push"
alias deactivateprepush="mv .git/hooks/pre-push .git/hooks/pre-push.sample"

# "po" for "posh" ("push")

po() {
  if [[ -f ".git/hooks/pre-push" ]]; then
    echo ".git/hooks/pre-push was found:"
    nvim .git/hooks/pre-push
  else
    if [[ -f ".git/hooks/pre-push.sample" ]]; then
      echo ".git/hooks/pre-push was not found:"
      echo "but .git/hooks/pre-push.sample was found:"
      nvim .git/hooks/pre-push.sample
    else
      echo "Hmmmmm"
    fi
  fi
}

# "l" as in the "ls -a" alias. "po" as in "posh"

lpo() {
  if [[ -f ".git/hooks/pre-push" ]]; then
    echo ".git/hooks/pre-push was found:"
    echo "pre-push is activated"
  else
    if [[ -f ".git/hooks/pre-push.sample" ]]; then
      echo ".git/hooks/pre-push was not found:"
      echo "but .git/hooks/pre-push.sample was found:"
      echo "pre-push is deactivated"
    else
      echo "Hmmmmm"
    fi
  fi
}

# python
alias activateHello="source ~/code/hello-world/.venv/bin/activate"
alias py="python"


# ------------ Other --------------


# search for word in a file's git history
# usage: filehistorysearch "use-query-params" package.json

filehistorysearch() {
  git grep $1 $(git rev-list --all -- $2) -- $2
}

# nvm node version manager

export NVM_DIR="$HOME/.nvm"
    [ -s "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" ] && \. "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" # This loads nvm
    [ -s "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion



# usage: Run `webstorm .` in terminal

webstorm() {
#   open "/Applications/WebStorm.app" .
    open -na "WebStorm.app" --args "$@"
}

pycharm() {
#   open "/Applications/PyCharm.app" .
    open -na "PyCharm.app" --args "$@"
}

manage() {
    if [[ $1 == "runtests" ]]; then
        docker compose --profile=manage run manage test hybel --parallel
    else
        docker compose --profile=manage run manage "$@"
    fi
}


# remove user from shell prompt / primary prompt
export DEFAULT_USER=$USER



# Set name of the theme to load --- if set to "random", it will
# load a random theme each time Oh My Zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='nvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch $(uname -m)"

# Set personal aliases, overriding those provided by Oh My Zsh libs,
# plugins, and themes. Aliases can be placed here, though Oh My Zsh
# users are encouraged to define aliases within a top-level file in
# the $ZSH_CUSTOM folder, with .zsh extension. Examples:
# - $ZSH_CUSTOM/aliases.zsh
# - $ZSH_CUSTOM/macos.zsh
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

source ~/.safe-chain/scripts/init-posix.sh # Safe-chain Zsh initialization script

. "$HOME/.local/bin/env"
