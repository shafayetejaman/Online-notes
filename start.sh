python3 backend/manage.py makemigrations && python3 backend/manage.py migrate;
concurrently "python3 backend/manage.py runserver localhost:8000" "npm start --prefix frontend localhost:3000"
