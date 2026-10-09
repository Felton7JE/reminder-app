# Reminder App: "Save now. Remember later."

A reminder application being built as part of Hack Club Terra.

**Author:** Felton Da Silva Joaquim Estevão

---

## Product Vision
This product is not just another task app or notepad. It's an **"inbox for everything you'll do later"**. It solves the abandonment problem ("I'll do it later but never do") by turning the intention to postpone into a concrete reminder action, with as little friction as possible.

**Positioning:** "Don't trust your memory. Share it and remember later."

## The Problem
1. People see content (Facebook/Instagram posts, links, photos, WhatsApp messages) that requires an action, but they cannot or don't want to execute it right then.
2. The intention of "I'll do it later" rarely converts into action without a trigger.
3. Creating a task in current apps (Todoist, Keep, To Do) requires too many steps: copy, open the app, create task, paste, fill title/description, choose date, save.

## The Solution (The Differentiator)
The flow must be extremely fast and almost automatic:
**Anything → Share → AI understands → Choose reminder → Done.**

## Competitors and Gaps
- **Todoist / TickTick / Microsoft To Do:** Focused on complex task management. They create friction with too many options (projects, tags, priorities).
- **Google Keep / Raindrop.io:** Excellent for "saving/archiving", but not geared towards "future action/execution".
- **Cue:** The closest to the vision, proving that the problem and the need exist.
- **Common Complaints:** Too many steps, unreliable reminders, flawed synchronization, loss of original context, and high prices.

## MVP Priorities (The 5 Golden Rules)

### P1 — Universal Sharing
Accept links, photos, screenshots, and text through the native sharing menu (especially designed for mobile/Android).

### P2 — Capture in Seconds (Max 2-3 taps)
Automatically extract the title and the link. Allow saving without forcing the user to fill in the title, category, or description. The manual form should be avoided at all costs.

### P3 — Reliable and Fast Reminders
Offer instant options: "Today", "Tomorrow", "In 30 mins". Do not promise notifications if the OS blocks them.

### P4 — Preserve Context
Each reminder must allow the user to immediately open the link, view the image, or retrieve the original text. The reminder is not just "see this", it is the gateway to the action itself.

### P5 — Intelligence (AI)
Use artificial intelligence to detect the context of the content, automatically extract dates/deadlines, and notify the user about what they should do, without them having to type anything.

## Interface Architecture (MVP)

The main screen should not focus on "Create Task", but rather on "Save for later" and display pending items cleanly.

```text
┌──────────────────────────┐
│  🔔 Remind               │
│                          │
│  + Save for later        │
│                          │
│  ─────────────────────   │
│                          │
│  🔴 Today                │
│  AEM Application         │
│                          │
│  🟡 Tomorrow             │
│  Buy USB cable           │
│                          │
│  🟢 This week            │
│  Python Workshop         │
└──────────────────────────┘
```

## Status and Next Steps
- [x] Project setup and planning phase
- [ ] Create the Inbox interface (index.html, style.css)
- [ ] Create the quick sharing/data receiving interface
- [ ] Validate with real users (Mozambique)
