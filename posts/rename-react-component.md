---
title: Rename React component
date: 2024-01-13
ranking: 5
tags:
  - react
  - javascript
---

```sh

# ask in what path the component resides in
# if no answer is provided, use default value
# -e flag is for giving `cd`-code completion while answering the question

defaultValue=src/components/

read -e -p "Where is component located? (default: $defaultValue): " location
location=${location:-$defaultValue}

cd $location

read -e -p "Enter component name you want to rename: " currentName

cd $currentName

# if component ends with a trailing slash
if [[ "$currentName" == */ ]]; then
  # remove trailing slash
  currentName=${currentName%/}
fi

indexFile=index.ts
componentFile=$currentName.tsx
storyFile=$currentName.stories.tsx
stylesheetFile=$currentName.module.css
stylesheetScssFile=$currentName.module.scss

if [[ $currentName != "" ]]; then
    echo
    echo "This will try and rename:"
    echo "---- folder -----"
    echo $currentName
    echo
    echo "---- files -----"
    echo - $indexFile
    echo - $componentFile
    echo - $storyFile
    echo - $stylesheetFile
    echo - $stylesheetScssFile
    echo

    read -p "Enter new name: " newName
    if [[ $newName != "" ]]; then
        echo
        echo "search replace in files"
        echo

        sed -i "s/$currentName/$newName/g" $indexFile
        sed -i "s/$currentName/$newName/g" $componentFile
        sed -i "s/$currentName/$newName/g" $storyFile
        sed -i "s/$currentName/$newName/g" $stylesheetFile
        sed -i "s/$currentName/$newName/g" $stylesheetScssFile

        echo
        echo "rename files and folders"
        echo

        mv $componentFile $newName.tsx
        mv $storyFile $newName.stories.tsx
        mv $stylesheetFile $newName.module.css
        mv $stylesheetScssFile $newName.module.scss

        cd ..

        mv $currentName $newName/
    fi
fi


```
