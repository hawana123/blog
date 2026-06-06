'use client';

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
}

export default function ContactForm({ labels }: ContactFormProps) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{labels.name}</label>
        <input
          type="text"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder={labels.name}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{labels.email}</label>
        <input
          type="email"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder={labels.email}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{labels.subject}</label>
        <input
          type="text"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          placeholder={labels.subject}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{labels.message}</label>
        <textarea
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          placeholder={labels.message}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {labels.send}
      </button>
    </form>
  );
}
