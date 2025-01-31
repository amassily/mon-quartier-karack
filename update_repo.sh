#!/bin/bash

# Aller dans le dossier du dépôt
cd C:\Users\amass\OneDrive\Bureau\mon-quartier-karack || exit

# Récupérer les dernières mises à jour
git pull origin main

# Afficher un message
echo "Mise à jour effectuée à $(date)" >> update.log

chmod +x update_repo.sh

crontab -e
C:\Users\amass\OneDrive\Bureau\mon-quartier-karack/chemin/vers/ton/repo/update_repo.sh

