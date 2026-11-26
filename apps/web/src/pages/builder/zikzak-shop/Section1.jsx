import React from 'react';
import BlockEcommerceProductList from '@/components/builder/blocks/BlockEcommerceProductList';

export default function Section1() {
	return (
		<BlockEcommerceProductList
			blockId={"ai-w4WvEg"}
			limit={20}
			productIds={[
				null,
				null,
				null,
				null,
				null,
				null
			]}
			productCategoryId={undefined}
			productType={undefined}
			columnCount={4}
			columnGap={undefined}
			imageRatio={"cover"}
			imageBorderRadius={undefined}
			listItemStyle={"left"}
			imageHoverEffect={"zoom"}
			productSorting={{
				enabled: true,
				textColor: "#0d141a",
				sortingOptions: [
					{
						id: "default",
						value: "",
						isEnabled: true,
						label: "Default"
					},
					{
						id: "priceLTH",
						value: "order=ASC&sort_by=price",
						isEnabled: true,
						label: "Price (low to high)"
					},
					{
						id: "priceHTL",
						value: "order=DESC&sort_by=price",
						isEnabled: true,
						label: "Price (high to low)"
					},
					{
						id: "mostRecent",
						value: "order=DESC&sort_by=created_at",
						isEnabled: true,
						label: "Most recent"
					}
				]
			}}
			scrollBehaviour={"pagination"}
			isTotalProductCountShown={false}
			isButtonEnabled={false}
			buttonText={undefined}
			buttonDisplay={undefined}
			buttonType={"primary"}
			buttonBorderWidth={1}
			isButtonFullWidth={false}
			isFullWidth={false}
			isListCentered={false}
			isCategoryListEnabled={false}
			disabledFilterCategoryIds={undefined}
			isScrollToTopEnabled={false}
			scrollToTopStyle={undefined}
			ribbonStyle={{
				"ribbon-color": "#ffffff",
				"ribbon-background-color": "#0d141a"
			}}
			style={{
				"--textAlign": "left",
				"--block-padding-top": "64px",
				"--block-padding": "64px 16px 64px 16px",
				"--block-padding-right": "16px",
				"--block-padding-bottom": "64px",
				"--block-padding-left": "16px",
				"--content-width": "1224px",
				"--m-block-padding": "56px 16px",
				backgroundColor: "#ffffff",
				"--h1-color": "#0d141a",
				"--h2-color": "#0d141a",
				"--h3-color": "#0d141a",
				"--h4-color": "#0d141a",
				"--h5-color": "#0d141a",
				"--h6-color": "#0d141a",
				"--body-color": "#0d141a",
				"--body-large-color": "#0d141a",
				"--grid-button-primary-color": "#0d141a",
				"--grid-button-secondary-color": "#0d141a",
				"--grid-button-primary-font-size": "14px",
				"--grid-button-primary-padding-x": "32px",
				"--grid-button-primary-padding-y": "14px",
				"--grid-button-primary-color-hover": "#0d141a",
				"--grid-button-primary-m-font-size": "14px",
				"--grid-button-primary-m-padding-x": "32px",
				"--grid-button-primary-border-color": "#0d141a",
				"--grid-button-primary-color-active": "#0d141a",
				"--grid-button-secondary-color-hover": "#0d141a",
				"--grid-button-secondary-border-color": "#ffffff",
				"--grid-button-primary-background-color": "rgba(255, 255, 255, 0)",
				"--grid-button-primary-border-color-hover": "#0d141a",
				"--grid-button-secondary-background-color": "#ffffff",
				"--grid-button-primary-border-color-active": "#0d141a",
				"--grid-button-secondary-border-color-hover": "#ffffff",
				"--grid-button-secondary-border-color-active": "#ffffff",
				"--grid-button-primary-background-color-hover": "rgba(255, 255, 255, 0)",
				"--grid-button-primary-background-color-active": "rgba(255, 255, 255, 0)",
				"--grid-button-secondary-background-color-hover": "#ffffff",
				"--grid-button-secondary-background-color-active": "#ffffff"
			}}
		/>
	);
}
