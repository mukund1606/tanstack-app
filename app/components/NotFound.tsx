import { Link } from "@tanstack/react-router";
import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-dvh p-4">
      <Card className="m-auto">
        <CardHeader>
          <CardTitle className="text-xl">Oops, page not found!</CardTitle>
          <CardDescription>
            {children ?? <p>The page you are looking for does not exist.</p>}
            <Link
              to="/"
              className="font-semibold text-blue-500 underline underline-offset-1"
            >
              Go back to home
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
