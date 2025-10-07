# Task Scheduler

A minimalist, web-based task scheduling app concept inspired by Raycast aesthetics. The dashboard consolidates task management workflows into a single experience with three complementary views: task list, Kanban board, and daily horizontal timeline.

## Planned Experience
- **Tabbed dashboard:** Quickly toggle between list, Kanban, and timeline views without leaving the main screen.
- **Quick add pop-out:** Create tasks from anywhere with a lightweight composer.
- **Rich task details:** Track assignee, date, title, description, priority, notes, and status in every view.
- **Drag-and-drop timeline:** Reschedule work by dragging tasks across the horizontal timeline.

## Dashboard Shell (current milestone)
- Responsive, full-width dashboard chrome with Raycast-inspired gradients.
- Primary navigation including brand, search, quick actions, and avatar entry point.
- Workspace intro banner highlighting focus mode, team, and upcoming sync.
- Accessible tab system for Task List, Kanban Board, and Daily Timeline views with session persistence.
- Placeholder panels reserving space for future interactions in each view.

## Documentation
- [Requirements](docs/requirements.md)

## Getting Started
This prototype is implemented as a lightweight static experience.

1. Start a local web server from the project root (for example using Python):
   ```bash
   python -m http.server 4173
   ```
2. Visit [http://localhost:4173/index.html](http://localhost:4173/index.html) in your browser.

Alternatively, you can open `index.html` directly in most modern browsers.

## Status
Early planning and requirements gathering. The dashboard shell is now implemented as a baseline for future functionality.
