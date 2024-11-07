#include <esp_now.h>
#include <WiFi.h>
#include "DHT.h"

#define DHT11PIN 22
#define capacitivePin 32

DHT dht(DHT11PIN, DHT11);

uint8_t macMaster[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF}; // Substitua pelo MAC Address do mestre
unsigned long lastSendTime = 0;
int soilHumidity;
float airHumidity;
float temperature;
#define SEND_INTERVAL 5000  // Intervalo de envio em milissegundos (5 segundos)
#define capacitve 32;

// Estrutura para armazenar a mensagem e o MAC Address
typedef struct Message {
  char text[100];
  uint8_t mac[6];
} Message;


void InitESPNow();
void sendData();
void collectData();
void printData();

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  Serial.print("Mac Address in Station: "); 
  Serial.println(WiFi.macAddress());

  InitESPNow();
  
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, macMaster, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;

  // Adiciona o mestre como peer para enviar dados
  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("Failed to add master as peer");
    return;
  }

  Serial.println("ESPNow initialized and master added as peer");

  pinMode(capacitivePin, INPUT);
  dht.begin();
}

void InitESPNow() {
  if (esp_now_init() == ESP_OK) {
    Serial.println("ESPNow Init Success");
  } else {
    Serial.println("ESPNow Init Failed");
    ESP.restart();
  }
}

void sendData() {
  collectData();
  printData();

  Message message;

  // Usa sprintf para formatar a string corretamente
  sprintf(message.text, "Soil Humidity: %d Air Humidity: %.2f Temperature: %.2f", soilHumidity, airHumidity, temperature);

  // Obtém o MAC Address do escravo e coloca na estrutura
  WiFi.macAddress(message.mac);

  // Envia a estrutura
  esp_err_t result = esp_now_send(macMaster, (uint8_t*) &message, sizeof(message));

  if (result == ESP_OK) {
    Serial.println("Message sent: Sensor data with MAC Address");
  } else {
    Serial.println("Failed to send message");
  }
}

void collectData() {
  soilHumidity = analogRead(capacitivePin);
  airHumidity = dht.readHumidity();
  temperature = dht.readTemperature();
}

void printData() {
  Serial.print("Soil Humidity: ");
  Serial.print(soilHumidity);
  Serial.print(" Air Humidity: ");
  Serial.print(airHumidity);
  Serial.print(" Temperature: ");
  Serial.println(temperature);
}

void loop() {
  unsigned long currentTime = millis();
  if (currentTime - lastSendTime >= SEND_INTERVAL) {
    sendData();
    lastSendTime = currentTime;
  }
}
