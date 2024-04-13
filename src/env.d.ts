//인터페이스를 통한 타입 추론
interface ImportMeta {
    env: {
      MODE: string  //개발모드, 운영모드여부
      SERVER_BASE_URL: string    
    }
}