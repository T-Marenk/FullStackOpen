```mermaid
  sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: Javascript adds new note to content and redraws them on submit. Website does not refresh
    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status 201
    deactivate server
```
