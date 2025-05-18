# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJSHREE MUNJABA BHALSHANKAR

*INTERN ID*: CT04DK771

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# 📝 Real-Time Collaborative Document Editor

This **Real-Time Collaborative Document Editor** is a full-stack web application that allows multiple users to **collaborate on a single document simultaneously** in real-time. The application is built using **Node.js**, **Express.js**, **Socket.IO**, and **Quill.js**. It enables seamless and synchronized editing, similar to tools like Google Docs, making it ideal for teams, classrooms, or anyone working on shared content.

## 🚀 Project Objective

The primary goal of this project is to create a real-time collaborative text editing experience where changes made by one user are instantly reflected for all other connected users. It combines modern frontend rich-text editors with WebSocket-based backend communication to ensure low-latency updates.

---

## 🌟 Key Features

* **Real-time synchronization:** All changes made by one user are propagated instantly to all other users editing the same document.
* **Rich Text Editing:** Uses [Quill.js](https://quilljs.com/) for powerful and intuitive rich-text editing.
* **Unique Document ID Routing:** Each document has a unique ID that can be shared for collaboration.
* **Persistent Storage (Optional):** The document's content can be saved to a database (MongoDB) for persistence and restoration.
* **WebSocket Communication:** Leveraging **Socket.IO**, the app provides efficient, bi-directional communication between server and clients.
* **Responsive UI:** Clean and responsive user interface that works across devices and screen sizes.
* **Session Restoration:** On reload or reconnect, users can continue editing without data loss (if persistence is implemented).
* **Typing in Sync:** See changes character-by-character, live as others type.

---

## ⚙️ Technologies Used

### 🛆 Backend:

* **Node.js** – JavaScript runtime environment.
* **Express.js** – Fast, minimalist web framework for Node.js.
* **Socket.IO** – Library for real-time, bidirectional communication between clients and server.
* **MongoDB (Optional)** – NoSQL database for persistent document storage.
* **Mongoose (Optional)** – MongoDB ODM for defining schemas and interacting with the database.

### 🎨 Frontend:

* **HTML5 & CSS3** – Base structure and styling of the web interface.
* **Quill.js** – A rich-text editor that provides intuitive WYSIWYG editing features.
* **JavaScript** – Client-side logic, event handling, and Socket.IO communication.

---

## 🗂️ Project Structure

```
REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR/
│
├── public/                 # Static assets served to the browser
│   ├── index.html          # Main document editing UI
│   ├── style.css           # Custom styles
│   └── script.js           # Frontend socket & editor logic
│
├── server.js               # Express server and Socket.IO setup
├── package.json            # Node dependencies and metadata
└── README.md               # Project documentation
```

---

## 🔧 How It Works

1. When a user visits the app, they are redirected to a unique document URL (`/doc/:id`).
2. The frontend initializes a **Quill.js** editor and connects to the server via **Socket.IO**.
3. Each keystroke or formatting change is emitted to the server.
4. The server broadcasts these updates to all other connected clients editing the same document.
5. Optionally, every few seconds or after each change, the content is saved to **MongoDB** for persistence.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rajshree1126/REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR.git
cd REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
node server.js
```

### 4. Open in Browser

Visit:

```
http://localhost:3000
```

You will be redirected to a document with a unique ID like `http://localhost:3000/doc/abc123`.

Share this URL to collaborate!

---

## 🧪 Use Cases

* Collaborative note-taking during meetings or lectures.
* Pair programming and code documentation.
* Real-time group writing or brainstorming.
* Remote classroom exercises and assignments.

---

## 👩‍💻 Developer Insights

This project provides a great starting point for understanding real-time applications and WebSocket communication. Some potential enhancements include:

* User authentication & document ownership.
* Version control and document history.
* Integration with cloud storage (e.g., Google Drive).
* Markdown editing support.
* Commenting and annotations.

---

## ✉️ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Make sure to update tests as appropriate.

---

## ✅ License

This project is open-source.

---

Thank you for checking out the Real-Time Collaborative Document Editor! Feel free to star this repo if you found it helpful ✨
