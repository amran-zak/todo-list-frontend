// src/components/AboutApp.tsx
const AboutApp: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-blue-50 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-blue-800 flex items-center justify-center">
                📋 À propos de cette appli To-Do List
            </h1>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Cette application est une liste de tâches en style Kanban, inspirée de Jira, pour aider les utilisateurs à gérer leurs tâches de manière visuellement organisée et intuitive. 💼✨
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-800 flex items-center">
                🛠️ Technologies Utilisées
            </h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                <li><strong>⚛️ React</strong> - pour construire l’interface utilisateur.</li>
                <li><strong>🌐 Next.js</strong> - pour le rendu côté serveur et le routage des pages.</li>
                <li><strong>🚀 NestJS</strong> - pour l’API backend et la gestion des requêtes.</li>
                <li><strong>💾 MongoDB</strong> - pour stocker les tâches de manière persistante.</li>
                <li><strong>🔄 React Query</strong> - pour gérer les requêtes API et le cache.</li>
                <li><strong>🎨 Tailwind CSS</strong> - pour styliser l’application de façon moderne et responsive.</li>
            </ul>
        </div>

    );
};

export default AboutApp;
