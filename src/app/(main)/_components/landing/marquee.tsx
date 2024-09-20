import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { User } from 'lucide-react';

const reviews = [
  {
    name: "Carlos",
    username: "carlosempreendedor.com.br",
    body: "A Pitanga Studio transformou minha presença online. O site que criaram para minha empresa é simplesmente incrível!",
  },
  {
    name: "Ana",
    username: "anadesign.com.br",
    body: "O SaaS desenvolvido pela Pitanga Studio revolucionou a maneira como gerencio meus projetos de design.",
  },
  {
    name: "Pedro",
    username: "pedromarketing.com.br",
    body: "As campanhas de tráfego pago da Pitanga Studio aumentaram significativamente o ROI do meu negócio.",
  },
  {
    name: "Mariana",
    username: "marianatech.com.br",
    body: "A automação implementada pela Pitanga Studio otimizou todos os processos da minha startup de tecnologia.",
  },
  {
    name: "Roberto",
    username: "robertoconsultoria.com.br",
    body: "O CRM personalizado da Pitanga Studio melhorou drasticamente o relacionamento com meus clientes.",
  },
  {
    name: "Juliana",
    username: "julianaempreendedora.com.br",
    body: "Graças à Pitanga Studio, minha empresa agora tem uma presença digital forte e coerente em todas as plataformas.",
  },
];

const secondRow = reviews;

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-[#ed6c08]/[.1] bg-[#ed6c08]/[.01] hover:bg-[#ed6c08]/[.05]",
        "dark:border-[#f28c01]/[.1] dark:bg-[#f28c01]/[.10] dark:hover:bg-[#f28c01]/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="bg-[#ed6c08] p-2 rounded-full">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#ed6c08] dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-[#ed6c08]/40 dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-[#333] dark:text-white/80">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mb-10 relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-[#001a33]">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-[#001a33]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-[#001a33]"></div>
    </div>
  );
}