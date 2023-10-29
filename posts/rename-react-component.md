---
title: Rename React component
ranking: 5
tags:
- react
- javascript
---

```sh
# ask in what path the component resides in
# if no answer is provided, use default value
# -e flag is for giving `cd`-code completion while answering the question
defaultValue=src/stories/default/
read -e -p "Where is component located? (default: $defaultValue): " location
location=${location:-$defaultValue}

read -p "Enter component name you want to rename: " currentName

componentPath=$location/$currentName
index=$componentPath/index.ts
component=$componentPath/$currentName.tsx
story=$componentPath/$currentName.stories.tsx
stylesheet=$componentPath/$currentName.module.css

if [[ $currentName != "" ]]; then
    filesInThatFolder=$(cd $componentPath && ls)
    echo
    echo "This will affect:"
    echo "---- folder -----"
    echo $componentPath
    echo
    echo "---- files -----"
    echo $filesInThatFolder
    echo
    
    read -p "Enter new name: " newName
    if [[ $newName != "" ]]; then
        
        # update code
        sed -i "s/$currentName/$newName/g" $index
        sed -i "s/$currentName/$newName/g" $component
        sed -i "s/$currentName/$newName/g" $story
        sed -i "s/$currentName/$newName/g" $stylesheet
        
        # rename files and folder
        mv $component $componentPath/$newName.tsx
        mv $story $componentPath/$newName.stories.tsx
        mv $stylesheet $componentPath/$newName.module.css
        mv $componentPath $location/$newName/
    fi
fi
```
