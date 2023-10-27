import React from 'react';
import Section from '../common/section';
import { BaseComponent } from '../../utils/types/clientTypes';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import ProjectCarousel from '../components/projectCarousel';

const ProductSection = ({
  classNamePrefix,
  className,
}: BaseComponent & { classNamePrefix: string }) => {
  const { t } = useTranslation('common');

  return (
    <Section
      className={clsx(
        `${classNamePrefix}__project-carousel-container`,
        className
      )}
    >
      <div className={`${classNamePrefix}__section-title`}>
        <span>{t('Section_label.product')}</span>
      </div>
      <ProjectCarousel />
    </Section>
  );
};

export default ProductSection;
