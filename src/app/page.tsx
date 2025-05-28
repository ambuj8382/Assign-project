'use client';

import AiJourney from '@/components/AiJourney';
import BranchingPaths from '@/components/BranchingPaths';
import CreatedPrompts from '@/components/CreatedPrompts';
import Generate from '@/components/Generate';
import PromptService from '@/components/PromptService';
import Template from '@/components/Template';
import TemplateAi from '@/components/TemplateAi';
import Toggle from '@/components/Toggle';
import { User } from '@/components/User';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1b] text-white font-sans px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="flex-1 flex flex-col gap-7">
            <Template />
            <User />
            <Generate />
          </div>

          <div className="flex-1 flex flex-col items-center gap-8">
            <TemplateAi />
            <div className="flex flex-row gap-7">
              <BranchingPaths />
              <AiJourney />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-7">
            <Toggle />
            <CreatedPrompts />
            <PromptService />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
