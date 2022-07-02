# Fichier de création de ma BDD
export PGUSER=postgres

## On crèe un utilisateur
createuser scene

## On crèe la BDD avec l'utilisateur comme owner
createdb scene -O scene