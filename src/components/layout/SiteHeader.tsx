"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Container } from "@/components/ui/Container";
import { headerNav, services, contact } from "@/content/site";
import { tokens } from "@/theme/tokens";
import { AnimatePresence, motion } from "framer-motion";
import {
    CaretDown,
    List,
    X,
    ArrowRight,
    SignIn,
    Devices,
    Globe,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────────────────────
// ANIMATIONS
// ─────────────────────────────────────────────────────────────

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

// ─────────────────────────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────────────────────────

const Header = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Row = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const LogoLink = styled(motion.create(Link))`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: none;
  }
`;

const NavLink = styled(motion.create(Link))`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${tokens.colors.text};
  padding: 10px 16px;
  border-radius: 100px;
  position: relative;
  transition: color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 100px;
    background: transparent;
    transition: background 0.2s ease;
  }

  &:hover {
    color: ${tokens.colors.black};

    &::before {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

const NavButton = styled(motion.button)`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${tokens.colors.text};
  padding: 10px 16px;
  border-radius: 100px;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 100px;
    background: transparent;
    transition: background 0.2s ease;
  }

  &:hover {
    color: ${tokens.colors.black};

    &::before {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

const SolutionsWrap = styled.div`
  position: relative;
`;

const Popover = styled(motion.div)`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  width: 480px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 20px 25px -5px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  overscroll-behavior: contain;
`;

const PopoverHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PopoverTitle = styled.span`
  font-family: 'Urbanist', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.colors.muted};
`;

const PopoverViewAll = styled(motion.create(Link))`
  font-family: 'Urbanist', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${tokens.colors.brand.red};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const PopoverGrid = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  max-height: 360px;
  overflow-y: auto;
`;

const PopoverItem = styled(motion.create(Link))`
  padding: 14px 16px;
  border-radius: 16px;
  background: transparent;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const PopoverItemTitle = styled.span`
  display: block;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${tokens.colors.black};
  line-height: 1;
`;

const PopoverItemDesc = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: ${tokens.colors.muted};
  line-height: 1.4;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CtaWrap = styled.div`
  position: relative;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: none;
  }
`;

const CtaButton = styled(motion.button)`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 100px;
  border: none;
  background: ${tokens.colors.black};
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite;
  }
`;

const CtaPopover = styled(motion.div)`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 320px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 20px 25px -5px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const CtaPopoverHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(135deg, rgba(225, 6, 0, 0.03) 0%, transparent 100%);
`;

const CtaPopoverTitle = styled.span`
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${tokens.colors.black};
`;

const CtaPopoverSubtitle = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: ${tokens.colors.muted};
`;

const CtaList = styled.div`
  padding: 8px;
`;

const CtaItem = styled(motion.create(Link))`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const CtaItemIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${tokens.colors.brand.red} 0%, #ff4444 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const CtaItemContent = styled.div`
  flex: 1;
`;

const CtaItemTitle = styled.span`
  display: block;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${tokens.colors.black};
  line-height: 1;
`;

const CtaItemDesc = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: ${tokens.colors.muted};
`;

const MenuButton = styled(motion.button)`
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  color: ${tokens.colors.black};
  cursor: pointer;

  @media (max-width: ${tokens.breakpoints.md}px) {
    display: inline-flex;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 200;
`;

const Drawer = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  height: 100dvh;
  width: min(400px, 90vw);
  background: white;
  z-index: 210;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DrawerHeader = styled.div`
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const DrawerContent = styled.nav`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const DrawerSection = styled.div`
  margin-bottom: 24px;
`;

const DrawerSectionTitle = styled.div`
  font-family: 'Urbanist', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.colors.muted};
  margin-bottom: 12px;
  padding: 0 12px;
`;

const DrawerGrid = styled.div`
  display: grid;
  gap: 4px;
`;

const DrawerItem = styled(motion.create(Link))`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: transparent;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const DrawerItemIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, ${tokens.colors.brand.red} 0%, #ff4444 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const DrawerItemText = styled.span`
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${tokens.colors.black};
`;

const DrawerLink = styled(motion.create(Link))`
  display: block;
  padding: 14px 16px;
  border-radius: 14px;
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${tokens.colors.text};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    color: ${tokens.colors.black};
  }
`;

const DrawerServiceItem = styled(motion.create(Link))`
  display: block;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: ${tokens.colors.text};
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.15s ease;

  &:hover {
    background: rgba(225, 6, 0, 0.04);
    border-color: rgba(225, 6, 0, 0.15);
    color: ${tokens.colors.black};
  }
`;

const DrawerFooter = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const DrawerCta = styled(motion.create(Link))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 14px;
  background: ${tokens.colors.black};
  color: white;
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

const popoverVariants = {
    hidden: {
        opacity: 0,
        y: 8,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        transition: {
            duration: 0.15,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    }),
};

const drawerVariants = {
    hidden: { x: "100%", opacity: 0.8 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 40,
        },
    },
    exit: {
        x: "100%",
        opacity: 0.8,
        transition: {
            duration: 0.25,
            ease: [0.23, 1, 0.32, 1] as const,
        },
    },
};

// ─────────────────────────────────────────────────────────────
// CTA ITEMS
// ─────────────────────────────────────────────────────────────

const ctaItems = [
    {
        icon: <Globe size={20} weight="bold" />,
        title: "Rastreamento e Gestão de Frotas",
        desc: "FullTrack App",
        href: "https://fulltrackapp.com/emp/7191-tk-rastreadores",
    },
    {
        icon: <Devices size={20} weight="bold" />,
        title: "Telemetria, Logística e Gestão",
        desc: "SystemSatx",
        href: "https://tracking.systemsatx.com.br/",
    },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    const [solutionsOpen, setSolutionsOpen] = React.useState(false);
    const [ctaOpen, setCtaOpen] = React.useState(false);
    const solutionsRef = React.useRef<HTMLDivElement | null>(null);
    const ctaRef = React.useRef<HTMLDivElement | null>(null);

    const solutionsItem = React.useMemo(
        () => headerNav.items.find((i) => i.href === "/servicos" || i.label.toLowerCase().includes("solu")),
        []
    );
    const primaryItems = React.useMemo(
        () => headerNav.items.filter((i) => i.href !== solutionsItem?.href),
        [solutionsItem]
    );

    // Close everything on route change
    React.useEffect(() => {
        setOpen(false);
        setSolutionsOpen(false);
        setCtaOpen(false);
    }, [pathname]);

    // Lock body scroll when drawer open
    React.useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close popovers on outside click
    React.useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
                setSolutionsOpen(false);
            }
            if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) {
                setCtaOpen(false);
            }
        };
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSolutionsOpen(false);
                setCtaOpen(false);
            }
        };
        window.addEventListener("mousedown", handleClick);
        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("mousedown", handleClick);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <Header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
            <Container>
                <Row>
                    <LogoLink
                        href="/"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Image
                            src="/logo/logo-v1.svg"
                            alt="TK Rastreadores"
                            width={120}
                            height={36}
                            priority
                        />
                    </LogoLink>

                    <Nav>
                        {primaryItems.map((item, i) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {solutionsItem && (
                            <SolutionsWrap
                                ref={solutionsRef}
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onMouseLeave={() => setSolutionsOpen(false)}
                            >
                                <NavButton
                                    type="button"
                                    onClick={() => setSolutionsOpen((v) => !v)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {solutionsItem.label}
                                    <motion.span
                                        animate={{ rotate: solutionsOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ display: "flex" }}
                                    >
                                        <CaretDown size={14} weight="bold" />
                                    </motion.span>
                                </NavButton>

                                <AnimatePresence>
                                    {solutionsOpen && (
                                        <Popover
                                            data-lenis-prevent
                                            variants={popoverVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            style={{ transform: "translateX(-50%)" }}
                                        >
                                            <PopoverHeader>
                                                <PopoverTitle>Nossas Soluções</PopoverTitle>
                                                <PopoverViewAll
                                                    href={solutionsItem.href}
                                                    onClick={() => setSolutionsOpen(false)}
                                                    whileHover={{ x: 4 }}
                                                >
                                                    Ver todas <ArrowRight size={14} weight="bold" />
                                                </PopoverViewAll>
                                            </PopoverHeader>
                                            <PopoverGrid>
                                                {services.map((s, i) => (
                                                    <PopoverItem
                                                        key={s.slug}
                                                        href={`/solucoes/${s.slug}`}
                                                        onClick={() => setSolutionsOpen(false)}
                                                        custom={i}
                                                        variants={itemVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        whileHover={{ scale: 1.02, x: 4 }}
                                                    >
                                                        <PopoverItemTitle>{s.title}</PopoverItemTitle>
                                                        <PopoverItemDesc>
                                                            {s.short.slice(0, 60)}...
                                                        </PopoverItemDesc>
                                                    </PopoverItem>
                                                ))}
                                            </PopoverGrid>
                                        </Popover>
                                    )}
                                </AnimatePresence>
                            </SolutionsWrap>
                        )}
                    </Nav>

                    <Right>
                        <CtaWrap
                            ref={ctaRef}
                            onMouseEnter={() => setCtaOpen(true)}
                            onMouseLeave={() => setCtaOpen(false)}
                        >
                            <CtaButton
                                type="button"
                                onClick={() => setCtaOpen((v) => !v)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <SignIn size={18} weight="bold" />
                                Acessar Sistema
                                <motion.span
                                    animate={{ rotate: ctaOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ display: "flex" }}
                                >
                                    <CaretDown size={14} weight="bold" />
                                </motion.span>
                            </CtaButton>

                            <AnimatePresence>
                                {ctaOpen && (
                                    <CtaPopover
                                        variants={popoverVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <CtaPopoverHeader>
                                            <CtaPopoverTitle>Acesse sua conta</CtaPopoverTitle>
                                            <CtaPopoverSubtitle>
                                                Escolha como deseja acessar
                                            </CtaPopoverSubtitle>
                                        </CtaPopoverHeader>
                                        <CtaList>
                                            {ctaItems.map((item, i) => (
                                                <CtaItem
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setCtaOpen(false)}
                                                    custom={i}
                                                    variants={itemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover={{ scale: 1.02, x: 4 }}
                                                >
                                                    <CtaItemIcon>{item.icon}</CtaItemIcon>
                                                    <CtaItemContent>
                                                        <CtaItemTitle>{item.title}</CtaItemTitle>
                                                        <CtaItemDesc>{item.desc}</CtaItemDesc>
                                                    </CtaItemContent>
                                                    <ArrowRight size={18} color={tokens.colors.muted} />
                                                </CtaItem>
                                            ))}
                                        </CtaList>
                                    </CtaPopover>
                                )}
                            </AnimatePresence>
                        </CtaWrap>

                        <MenuButton
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {open ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <X size={20} weight="bold" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <List size={20} weight="bold" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </MenuButton>
                    </Right>
                </Row>
            </Container>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setOpen(false)}
                        />
                        <Drawer
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <DrawerHeader>
                                <Link href="/" onClick={() => setOpen(false)}>
                                    <Image
                                        src="/logo/logo-v1.svg"
                                        alt="TK Rastreadores"
                                        width={110}
                                        height={32}
                                    />
                                </Link>
                                <MenuButton
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X size={20} weight="bold" />
                                </MenuButton>
                            </DrawerHeader>

                            <DrawerContent>
                                {/* Access Section */}
                                <DrawerSection>
                                    <DrawerSectionTitle>Acessar Sistema</DrawerSectionTitle>
                                    <DrawerGrid>
                                        {ctaItems.map((item, i) => (
                                            <DrawerItem
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: { delay: 0.1 + i * 0.05 },
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <DrawerItemIcon>{item.icon}</DrawerItemIcon>
                                                <DrawerItemText>{item.title}</DrawerItemText>
                                                <ArrowRight size={18} color={tokens.colors.muted} />
                                            </DrawerItem>
                                        ))}
                                    </DrawerGrid>
                                </DrawerSection>

                                {/* Solutions Section */}
                                <DrawerSection>
                                    <DrawerSectionTitle>Soluções</DrawerSectionTitle>
                                    <DrawerGrid style={{ gap: 8 }}>
                                        {services.slice(0, 6).map((s, i) => (
                                            <DrawerServiceItem
                                                key={s.slug}
                                                href={`/solucoes/${s.slug}`}
                                                onClick={() => setOpen(false)}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: 0.2 + i * 0.03 },
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {s.title}
                                            </DrawerServiceItem>
                                        ))}
                                        <DrawerLink
                                            href="/servicos"
                                            onClick={() => setOpen(false)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { delay: 0.4 } }}
                                            style={{
                                                color: tokens.colors.brand.red,
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                            }}
                                        >
                                            Ver todas as soluções <ArrowRight size={16} weight="bold" />
                                        </DrawerLink>
                                    </DrawerGrid>
                                </DrawerSection>

                                {/* Navigation */}
                                <DrawerSection>
                                    <DrawerSectionTitle>Navegação</DrawerSectionTitle>
                                    <DrawerGrid>
                                        {primaryItems.map((item, i) => (
                                            <DrawerLink
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: { delay: 0.3 + i * 0.05 },
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {item.label}
                                            </DrawerLink>
                                        ))}
                                    </DrawerGrid>
                                </DrawerSection>
                            </DrawerContent>

                            <DrawerFooter>
                                <DrawerCta
                                    href={contact.comercial.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setOpen(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Solicitar orçamento
                                    <ArrowRight size={18} weight="bold" />
                                </DrawerCta>
                            </DrawerFooter>
                        </Drawer>
                    </>
                )}
            </AnimatePresence>
        </Header>
    );
}
