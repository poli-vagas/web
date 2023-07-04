# Pull new version
docker pull ghcr.io/poli-vagas/web:main

# Remove backup if exists
if [ "$(docker ps -a -q -f name=poli-vagas-web-old)" ]; then
    docker rm poli-vagas-web-old
fi

# Create backup of current version
docker rename poli-vagas-web poli-vagas-web-old

# Create new container
docker create --name poli-vagas-web -p 8090:80 --env-file .env ghcr.io/poli-vagas/web:main

# Stop current container
docker stop poli-vagas-web-old

# Start new container
docker start poli-vagas-web
