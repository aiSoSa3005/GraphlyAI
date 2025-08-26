# 📚 GraphlyAI - README

Benvenuto in **GraphlyAI**! 🚀  
Un SaaS moderno per generare grafici dinamici e interattivi usando AI senza bisogno di codificare o usare Excel.

---

## 📦 Funzionalità principali

- Inserimento dati X e Y manualmente o caricamento CSV.
- Generazione grafici interattivi (scatter, line, bar, pie) con Plotly.
- Utilizzo di DeepSeek R1 tramite Together AI API per assistenza AI.
- Download diretto dei grafici in PNG o HTML.
- Interfaccia moderna con React + Tailwind CSS.

---

## 🛠️ Stack Tecnologico

- **Frontend**: React + Tailwind CSS
- **Backend**: FastAPI
- **Grafici**: Plotly
- **Modello AI**: DeepSeek R1 (Together AI)

---

## 🏗️ Struttura Progetto

```bash
/root
├── frontend/          # App React + Tailwind
├── backend/           # API FastAPI + gestione AI
├── shared/            # Utilities comuni (modelli dati, helpers)
└── README.md          # Questo file
```

---

## 🚀 Come avviare il progetto

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

>  **Assicurati di avere la tua Together AI API Key impostata in un file `.env`**

---

## 🔑 Configurazione API Keys

**Together AI:**

- Crea un account su [Together AI](https://www.together.ai/)
- Ottieni la API Key
- Crea un file `.env` nel backend con:

```
TOGETHER_API_KEY=your_key_here
```

**(Facoltativo) Serper API Key** per ricerca web sicura:

```
SERPER_API_KEY=your_serper_key_here
```

---

## 🎯 Roadmap

- [x] Input manuale X e Y
- [x] Upload file CSV
- [x] Generazione grafici dinamici
- [ ] Salvataggio cronologia grafici
- [ ] Dashboard personale
- [ ] Collegamento a Google Sheets
- [ ] Supporto multimodale (immagini + dati)

---

## 👨‍💻 Autore

Progetto sviluppato da **[Prosper Aiosa Omoruyi]** ✨  
Con amore per la semplicità, la velocità e l'AI intelligente.

---

## 📜 Licenza

Da definire (MIT, GPL o licenza proprietaria SaaS).
