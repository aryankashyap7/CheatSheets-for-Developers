Always indent with two spaces.

### ```term: value``` — Objects

- Start with a term, no spaces, followed by a colon and a space.
```Yaml
name: "Tyrannosaurus"
period: "Late Cretaceous"
```
- Indent to create nested objects.
```Yaml
dimensions:
  width: "3 metres"
  height: "8 metres"
```
### ```value``` — Arrays

Start with a dash, and a space.
```Yaml
- "Other dinosaurs"
- "Meat"
```
### Arrays inside objects:
```Yaml
likes_to_eat:
  - "Other dinosaurs"
  - "Meat"
```
### Objects inside arrays.
```Yaml
- name: "T. rex"
  period: "Late Cretaceous Period"
```
### ```" ```— Escaping
Surround text with quotes (double or single) to escape text.
```Yaml
name_meaning: "tyrant & lizard"
```
- In all the previous examples the quotes aren’t really necessary. But I find myself almost always adding them for clarity and to prevent myself from having to think about whether I need to escape them or not.
### ```>``` — Folded text block

- Start with a greater than, and indent the next lines.

- The text will be collapsed into a single line when parsed.
```Yaml
desc: >
  Tyrannosaurus is a genus of coelurosaurian theropod dinosaur.
  The species Tyrannosaurus rex is one of the most well-represented of the  large theropods.
```
### ```|``` — Wrapped text block

- Start with a vertical pipe, and indent the next lines.

- The text will keep its multiple lines when parsed.
```Yaml
poem: |
  T. rex, T.rex
  How I love thee
```
### ```---``` — Front matter
YAML can be used at the top of Markdown documents to add more structured data.
Surround the YAML with two lines of consecutive dashes.
```Yaml
---
name: "Venus"
discoverer: "Galileo Galilei"
---
*Venus* is the second planet from the Sun, orbiting it every 224.7 Earth days.
```
