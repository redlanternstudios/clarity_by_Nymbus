import Image from 'next/image';

export function ClarityLogo({
  className = '',
  width = 160,
  priority = false,
}: {
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  // Intrinsic trimmed logo aspect ratio is 731 x 226
  const height = Math.round((width * 226) / 731);
  return (
    <Image
      src="/clarity-logo.png"
      alt="Clarity by Nymbus"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ width, height: 'auto' }}
    />
  );
}
