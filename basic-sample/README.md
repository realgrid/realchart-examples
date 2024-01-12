# RealChart Basic 예제

## Node.js 설치

### Windows:

- Node.js 공식 웹 사이트에서 최신 LTS 버전을 다운로드합니다.
- 다운로드한 설치 파일을 실행하고 설치 지침을 따릅니다.
- 설치가 완료되면 명령 프롬프트나 PowerShell을 열어 node -v와 npm -v를 입력하여 설치가 제대로 되었는지 확인합니다.

### macOS:

- Node.js 공식 웹 사이트에서 최신 LTS 버전을 다운로드합니다.
- 다운로드한 설치 파일을 실행하고 설치 지침을 따릅니다.
- 터미널을 열어 node -v와 npm -v를 입력하여 설치가 제대로 되었는지 확인합니다.

### Linux:

리눅스에서는 패키지 관리자를 통해 Node.js를 설치할 수 있습니다. 다양한 리눅스 배포판에 따라 패키지 관리자가 다를 수 있습니다.

ex) Ubuntu

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

ex) Fedora
```bash
sudo dnf install nodejs
sudo dnf install npm
```

ex) CentOS
```bash
sudo yum install epel-release
sudo yum install nodejs
sudo yum install npm
```
설치가 완료되면 터미널에서 node -v와 npm -v를 입력하여 설치가 제대로 되었는지 확인할 수 있습니다.

## 설치

```
$ git clone https://github.com/realgrid/realchart-examples
$ cd realchart-examples/basic-sample
$ npm install
```

## 테스트

웹 브라우저 환경에서 직접 테스트 해보고 싶다면 아래처럼 작성하여 실행할 수 있습니다.

```
$ npm run start
```
