"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badges?: string[];
  variant?: "glass" | "gradient" | "glow" | "elevated" | "default";
  onClick?: () => void;
}

export function FeatureCard({ icon, title, description, badges, variant = "glass", onClick }: FeatureCardProps) {
  return (
    <Card variant={variant} className="hover-lift cursor-pointer h-full" onClick={onClick}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {badges && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

