"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import { environments } from "./environments";

builder.init(environments.BUILDER_API_KEY);

interface Props {
  content: any;
}

export function RenderBuilderContent({ content }: Props) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
