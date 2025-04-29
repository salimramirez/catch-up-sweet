CREAR PROYECTO

sudo npx --yes --package @angular/cli@latest ng new catch-up --defaults --standalone=true

User Password
UPC0000

Updating File Ownership and Permissions

sudo chown -R alumnos:staff ~/Documents
sudo chown alumnos ~/.zshrc
sudo chown alumnos ~/.angular-config.json
chmod u+rw ~/.zshrc


Install Angular Material
sudo ng add @angular/material

Add Environments Variables
sudo chown -R alumnos:staff ~/Documents/workspace-4304/catch-up
ng g environments

Configure i18n
sudo npm i @ngx-translate/core @ngx-translate/http-loader

-> Cambiar: app.config
-> Cambiar: app.component.ts

-> Crear entidad:
ng g class news/model/Source --type=entity

-> Crear servicio LogoApi Service
ng g s shared/services/LogoApi


-> Crear el RESPONSE
ng g i news/services/Sources --type=response

-> Crear el ASSEMBLER
ng g cl news/services/Source --type=assembler

-> Cambiar el ASSEMBLER SPEC del mismo (nombre de la clase)

-> Crear el COMPONTENTE (___Item)
ng g c news/components/SourceItem

-> Crear el COMPONTENTE (____List)
ng g c news/components/ArticleList

-> Crear el Servicio que trae la API
ng g s news/services/NewsApi

-> Crear el FOOTER
ng g c public/components/FooterContent

-> Crear el SWITCHER del LANGUAGE
ng g c public/components/LanguageSwitcher

-> Crear el TOOLBAR
ng g c public/components/ToolBar

-> Actualizar el APP COMPONENT

-> GUIA JOGS
