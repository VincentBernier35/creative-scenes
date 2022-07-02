# Je me connecte en tant que oblog
export $PGUSER=oblog

# Déploiement de la version
# sqitch deploy db:pg:oblog 1.tables
sqitch deploy db:pg:oblog 2.constraints