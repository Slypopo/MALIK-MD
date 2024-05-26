>const buttons = [
  { 
    name: "cta_copy", 
    display_text: "Copy", 
    id: "123456789", 
    action: "default",
    icon: "📋",
    style: "button" 
  },
  { 
    name: "cta_url", 
    display_text: "Visit Google", 
    url: "https://www.google.com", 
    merchant_url: "https://www.google.com", 
    action: "url",
    icon: "🌐",
    style: "link" 
  },
  { 
    name: "cta_call", 
    display_text: "Call Us", 
    id: "message", 
    action: "call",
    icon: "📞",
    style: "button" 
  },
  { 
    name: "cta_reminder", 
    display_text: "Set Reminder", 
    id: "message", 
    reminder_time: "2024-04-28T12:00:00Z", 
    action: "reminder",
    icon: "⏰",
    style: "button" 
  }
];


return await m.send(buttons, { body: "hi", footer: "hoi", title: "bti"}, "button")
