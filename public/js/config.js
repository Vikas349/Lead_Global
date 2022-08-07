turnConfig = {
  iceServers: [
    {
      urls: [ "stun:bn-turn1.xirsys.com" ]
    }, 
    { 
      username: "mhvYJFkeE5WtEALdzY0KmzzUYqW3VBxynxPgRnyTxbqUyn_VJ0srQ-ajDuuRo0V1AAAAAGLhWG5OZXdMZWFk",
      credential: "0f985aa0-0dc0-11ed-8bd0-0242ac140004",
      urls: [
        "turn:bn-turn1.xirsys.com:80?transport=udp",
        "turn:bn-turn1.xirsys.com:3478?transport=udp",
        "turn:bn-turn1.xirsys.com:80?transport=tcp",
        "turn:bn-turn1.xirsys.com:3478?transport=tcp", 
        "turns:bn-turn1.xirsys.com:443?transport=tcp",
        "turns:bn-turn1.xirsys.com:5349?transport=tcp"
      ]
    }
  ]
}