# === my_device1 생성 및 하위 구조 설정 ===

curl -X POST http://172.28.6.239:8080/TinyIoT \
  -H "X-M2M-Origin: Carrot" \
  -H "Content-Type: application/json;ty=2" \
  -H "Accept: application/json" \
  -H "X-M2M-RVI: 2a" \
  -d '{"m2m:ae": {"rn": "my_device1","api": "N.my_device1.app","rr": true,"srv": ["2a"]}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1 \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "temperature"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/temperature \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/temperature \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "location"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1 \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "humidity"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/humidity \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/humidity \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "location"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1 \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "voltage"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/voltage \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1 \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "energyConsumption"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/energyConsumption \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1 \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "current"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device1/current \
  -H "X-M2M-Origin: Carrot" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

# === my_device2 생성 및 하위 구조 설정 ===

curl -X POST http://172.28.6.239:8080/TinyIoT \
  -H "X-M2M-Origin: Cow" \
  -H "Content-Type: application/json;ty=2" \
  -H "Accept: application/json" \
  -H "X-M2M-RVI: 2a" \
  -d '{"m2m:ae": {"rn": "my_device2","api": "N.my_device2.app","rr": true,"srv": ["2a"]}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2 \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "temperature"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/temperature \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/temperature \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "location"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2 \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "humidity"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/humidity \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/humidity \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "location"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2 \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "voltage"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/voltage \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2 \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "energyConsumption"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/energyConsumption \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2 \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "current"}}'

curl -X POST http://172.28.6.239:8080/TinyIoT/my_device2/current \
  -H "X-M2M-Origin: Cow" -H "Content-Type: application/json;ty=3" \
  -H "Accept: application/json" -H "X-M2M-RVI: 2a" \
  -d '{"m2m:cnt": {"rn": "data"}}'
