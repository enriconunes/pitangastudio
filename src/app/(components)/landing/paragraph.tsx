import { TextGenerateEffect } from "@/components/aceternityui/text-generate-effect";

interface ParagraphProps {
    children: string;
}

export default function Paragraph({ children }: ParagraphProps) {
    return (
        <div className="max-w-6xl mx-auto my-16">
            <TextGenerateEffect duration={2} filter={false} words={children} />
        </div>
    );
}