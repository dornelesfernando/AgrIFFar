#include <esp_now.h>
#include <WiFi.h>

// Estrutura para armazenar a mensagem e o MAC Address recebido
typedef struct Message {
  char text[50];
  uint8_t mac[6];
} Message;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  Serial.print("Mac Address in Station: ");
  Serial.println(WiFi.macAddress());

  InitESPNow();

  // Registra o callback para quando o mestre receber uma mensagem
  esp_now_register_recv_cb(OnDataRecv);
}

void InitESPNow() {
  if (esp_now_init() == ESP_OK) {
    Serial.println("ESPNow Init Success");
  } else {
    Serial.println("ESPNow Init Failed");
    ESP.restart();
  }
}

// Função chamada quando uma mensagem é recebida
void OnDataRecv(const esp_now_recv_info *recv_info, const uint8_t *incomingData, int len) {
  Message receivedMessage;
  memcpy(&receivedMessage, incomingData, sizeof(receivedMessage));

  // Converte o MAC Address para uma string para exibição
  char macStr[18];
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           recv_info->src_addr[0], recv_info->src_addr[1], recv_info->src_addr[2],
           recv_info->src_addr[3], recv_info->src_addr[4], recv_info->src_addr[5]);

  Serial.println("----------------------------------------------------------------------------------------------------");
  Serial.print("Message received: ");
  Serial.println(receivedMessage.text);
  Serial.print("MAC Address of slave: ");
  Serial.println(macStr);
}

void loop() {
  // Nenhuma ação é necessária no loop para este exemplo
}
