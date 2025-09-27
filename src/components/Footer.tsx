import React from 'react';
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © 2024 Illia Bernatskyi. Все права защищены.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Bangkok, Thailand</span>
            <span>•</span>
            <span>Full-stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}