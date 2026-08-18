# CyberAI Personal Brand Website

A modern personal brand website showcasing Ilham El Baraka's CyberAI project and AI-powered task automation agent.

## 🚀 Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Personal Brand**: Professional portfolio showcasing CyberAI expertise
- **AI Agent**: Task automation agent powered by Claude API
- **Responsive**: Fully responsive design for all devices
- **Cybersecurity Theme**: Dark theme with purple accents reflecting cybersecurity focus

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI**: Claude API (Anthropic)
- **Animations**: Framer Motion

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file and add:
```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Project Structure

```
cyberai-brand/
├── src/
│   ├── app/
│   │   ├── agent/          # AI Agent page
│   │   ├── api/            # API routes
│   │   │   └── chat/        # Claude API integration
│   │   ├── page.tsx        # Home page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
├── public/                 # Static assets
└── package.json
```

## 🔧 Configuration

### Claude API Setup

1. Get your API key from [Anthropic Console](https://console.anthropic.com/)
2. Add it to your `.env.local` file:
```
ANTHROPIC_API_KEY=sk-ant-...
```

### Deployment

The site can be deployed to various platforms:

- **Vercel**: Recommended for Next.js projects
- **Netlify**: Alternative with Next.js support
- **GitHub Pages**: Static export (requires configuration)

## 📝 Capstone Submission

This project fulfills the General AI Fluency capstone requirements:

1. ✅ **Master the AI Stack**: Integrated Claude API for AI capabilities
2. ✅ **Build Personal Brand**: Professional website showcasing expertise
3. ✅ **Ship Personal Agent**: Task automation agent for cybersecurity tasks

### Submission Instructions

For the FlyRank capstone submission, you can provide:

1. **Live URL**: Deploy the site and share the live URL
2. **GitHub Repository**: Share the code repository
3. **Documentation**: Include this README and project brief

## 🎨 Customization

### Personal Information

Update the following in `src/app/page.tsx`:
- Name and title
- Project descriptions
- Contact information
- Social media links

### Styling

Modify the color scheme in `src/app/page.tsx`:
- Change gradient colors
- Update accent colors (currently purple)
- Adjust spacing and layout

## 🔐 Security Notes

- Never commit `.env.local` to version control
- Keep API keys secure
- Implement rate limiting for production use
- Add authentication for sensitive features

## 📄 License

This project is created for educational and portfolio purposes.

## 👤 Author

**Ilham El Baraka**
- Email: ilhamelbaraka70@gmail.com
- Project: CyberAI Expert System
- Focus: AI & Cybersecurity

---

Built with ❤️ using Next.js, Tailwind CSS, and Claude AI