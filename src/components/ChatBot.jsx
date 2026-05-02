import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Sparkles, ChevronRight, Download } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Mohamed's AI assistant. How can I help you today? \n\n أهلاً بك! أنا المساعد الذكي لمحمد. كيف يمكنني مساعدتك اليوم؟",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    { en: "Skills", ar: "المهارات", icon: <Sparkles size={14} /> },
    { en: "Experience", ar: "الخبرة", icon: <ChevronRight size={14} /> },
    { en: "Projects", ar: "المشاريع", icon: <ChevronRight size={14} /> },
    { en: "CV", ar: "السيرة الذاتية", icon: <Download size={14} /> },
    { en: "Contact", ar: "التواصل", icon: <ChevronRight size={14} /> }
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = getBotResponse(text);
      
      // Auto-open CV if requested
      if (text.includes('cv') || text.includes('سيرة ذاتية') || text.includes('resume')) {
        window.open('./Mohamed Karem CV.pdf', '_blank');
      }

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (input) => {
    const text = input.toLowerCase().trim();
    
    // Identity & About
    if (text.includes('who are you') || text.includes('من أنت') || text.includes('اسمك') || text.includes('identity') || text.includes('مين انت')) {
      return "I am Mohamed AI, a digital assistant designed to tell you about Mohamed Karem's professional journey. \n\n أنا 'محمد AI'، مساعد رقمي صُممت لأخبرك عن المسيرة المهنية لمحمد كارم.";
    }

    // Skills
    if (text.includes('skill') || text.includes('مهارات') || text.includes('تعرف') || text.includes('برمجة') || text.includes('tools') || text.includes('بتعرف تعمل ايه')) {
      return "Mohamed specializes in Data Analysis and AI. His main tools are Python, SQL, Excel, and Machine Learning (Scikit-Learn, Pandas). \n\n يتخصص محمد في تحليل البيانات والذكاء الاصطناعي. أدواته الأساسية هي بايثون، SQL، إكسيل، وتعلم الآلة.";
    }

    // Experience & Work
    if (text.includes('experience') || text.includes('خبرة') || text.includes('عمل') || text.includes('وظيفة') || text.includes('career') || text.includes('اشتغلت فين') || text.includes('تاريخك المهني')) {
      return "Mohamed has over 5 years of professional experience. He started as a Financial Accountant and has transitioned into Data Analytics and Applied AI. \n\n يمتلك محمد خبرة مهنية تزيد عن 5 سنوات. بدأ كمحاسب مالي وانتقل إلى مجال تحليل البيانات والذكاء الاصطناعي التطبيقي.";
    }

    // Projects
    if (text.includes('project') || text.includes('مشروع') || text.includes('اعمال') || text.includes('portfolio') || text.includes('انجزت') || text.includes('مشاريعك')) {
      return "Mohamed has completed over 25 projects in data analysis and financial accounting. You can find detailed case studies in the Projects section above! \n\n أنجز محمد أكثر من 25 مشروعاً في تحليل البيانات والمحاسبة المالية. يمكنك العثور على دراسات حالة مفصلة في قسم المشاريع أعلاه!";
    }

    // Education
    if (text.includes('education') || text.includes('دراسة') || text.includes('جامعة') || text.includes('university') || text.includes('تخرج') || text.includes('درست ايه') || text.includes('تعليمك')) {
      return "Mohamed holds a Bachelor of Commerce (English Section) from South Valley University (2019-2023) and is self-trained in Advanced AI and Data Science. \n\n محمد حاصل على بكالوريوس التجارة (قسم إنجليزي) من جامعة جنوب الوادي (2019-2023) وهو مدرب ذاتياً في الذكاء الاصطناعي المتقدم وعلوم البيانات.";
    }

    // CV
    if (text.includes('cv') || text.includes('سيرة ذاتية') || text.includes('resume')) {
      return "You can view Mohamed's full CV here: [Open CV](./Mohamed Karem CV.pdf) \n\n يمكنك عرض السيرة الذاتية الكاملة لمحمد من هنا: [فتح السيرة الذاتية](./Mohamed Karem CV.pdf)";
    }

    // Contact
    if (text.includes('contact') || text.includes('تواصل') || text.includes('رقم') || text.includes('ايميل') || text.includes('هاتف') || text.includes('email') || text.includes('phone') || text.includes('أكلمك ازاي')) {
      return "You can reach Mohamed at +20 114 172 2256 or via email at mohamed.karim@example.com. \n\nCheck out his work on GitHub: [github.com/mohamedkarem20/portfolio](https://github.com/mohamedkarem20/portfolio) \n\n يمكنك التواصل مع محمد على الرقم 2256 172 114 20+ أو عبر البريد الإلكتروني. كما يمكنك متابعة أعماله على GitHub عبر الرابط أعلاه!";
    }

    // Greetings
    if (text.includes('hi') || text.includes('hello') || text.includes('سلام') || text.includes('مرحبا') || text.includes('كيفك') || text.includes('صباح')) {
      return "Hello! I'm ready to answer any questions about Mohamed's skills, experience, projects, or education. What would you like to know? \n\n أهلاً بك! أنا مستعد للإجابة على أي أسئلة حول مهارات محمد، خبراته، مشاريعه، أو دراسته. ماذا تود أن تعرف؟";
    }

    // Fallback
    return "I'm not quite sure about that specific question. You can ask me about his skills, projects, experience, or contact details! \n\n لست متأكداً تماماً من هذا السؤال. يمكنك سؤالي عن مهاراته، مشاريعه، خبراته، أو تفاصيل التواصل معه!";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] text-white hover:bg-primary-dark transition-colors relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
              <MessageSquare size={32} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-navy-dark flex items-center justify-center text-[10px] font-bold">
            1
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="p-5 bg-primary/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                    <Bot size={24} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-navy-dark animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Mohamed AI</h4>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.type === 'bot' 
                    ? 'bg-navy-light text-slate-200 rounded-tl-none border border-white/5' 
                    : 'bg-primary text-white rounded-tr-none shadow-lg'
                  }`}>
                    <p className="whitespace-pre-line leading-relaxed">
                      {msg.text.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                        const match = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (match) {
                          return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-primary-light transition-colors">{match[1]}</a>;
                        }
                        return part;
                      })}
                    </p>
                    <span className={`text-[10px] mt-1 block ${msg.type === 'bot' ? 'text-slate-500' : 'text-primary-light opacity-80'}`}>
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-navy-light p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 flex flex-wrap gap-2">
              {quickReplies.map((reply, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend(`${reply.en} / ${reply.ar}`)}
                  className="px-3 py-1.5 text-xs glass border border-primary/20 rounded-full text-slate-300 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-1"
                >
                  {reply.icon} {reply.en}
                </motion.button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-navy/50 border-t border-white/5">
              <form 
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me something... اسألني عن أي شيء"
                  className="flex-1 bg-navy-dark border border-white/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-slate-200"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
