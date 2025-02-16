import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link, rootRouteId, useMatch, useRouter } from "@tanstack/react-router";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  console.error(error);

  return (
    <>
      <div className="flex h-dvh p-4">
        <Card className="m-auto">
          <CardHeader>
            <CardTitle className="text-xl">
              Oops, something went wrong!
            </CardTitle>
            <CardDescription className="mx-auto flex gap-8 px-1 pt-3">
              <button
                onClick={async () => {
                  await router.invalidate();
                }}
                className="font-semibold text-blue-500 underline underline-offset-1"
              >
                Try again
              </button>
              {isRoot ? (
                <Link
                  to="/"
                  className="font-semibold text-blue-500 underline underline-offset-1"
                >
                  Go back to home
                </Link>
              ) : (
                <Link
                  to="/"
                  className="font-semibold text-blue-500 underline underline-offset-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                  }}
                >
                  Go back
                </Link>
              )}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
