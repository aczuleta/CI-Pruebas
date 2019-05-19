sudo sonar-scanner -X \
  -Dsonar.projectKey=aczuleta_CI-Pruebas \
  -Dsonar.organization=aczuleta-github \
  -Dsonar.sources=./services  \
  -Dsonar.host.url=https://sonarcloud.io \
  -Dsonar.login=25e810a494e91e8575bbcde2e210df0b02b929b2 \
  -Dsonar.exclusions=./node_modules/* \
  -Dsonar.eslint.eslintconfigpath=./.eslintrc.json\
  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info