build:
	./deploy.sh build

deploy:
	./deploy.sh build
	./deploy.sh image_push
	./deploy.sh deploy