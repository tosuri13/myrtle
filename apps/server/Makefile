build-MyrtleServerApiFunction:
	cp -r artifact/* $(ARTIFACTS_DIR)

	jq 'del(.devDependencies)' "package.json" > "$(ARTIFACTS_DIR)/package.json"
	cd $(ARTIFACTS_DIR) && npm install
