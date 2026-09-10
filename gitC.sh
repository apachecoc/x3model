# Verifica si se proporciona un mensaje de commit
if [ -z "$1" ]; then
    echo "Por favor, proporciona un mensaje de commit."
    exit 1
fi

# Añade todos los archivos
git add .

# Realiza el commit con el mensaje proporcionado
git commit -m "$1"

# Realiza el push
git push