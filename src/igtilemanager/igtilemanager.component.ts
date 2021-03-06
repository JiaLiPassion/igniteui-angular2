import { ElementRef, Renderer, IterableDiffers, Component } from "@angular/core";
import { IgContentControlBase } from "../igcontrolbase/igcontentcontrolbase";

@Component({
	selector: "ig-tile-manager",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","columnWidth","columnHeight","cols","rows","marginLeft","marginTop","rearrangeItems","items","dataSource","minimizedState","maximizedState","maximizedTileIndex","rightPanelCols","rightPanelTilesWidth","rightPanelTilesHeight","showRightPanelScroll","splitterOptions","preventMaximizingSelector","animationDuration","dataSourceUrl","responseDataKey","responseDataType","dataSourceType","requestType","responseContentType"],
	outputs: ["dataBinding","dataBound","rendering","rendered","tileRendering","tileRendered","tileMaximizing","tileMaximized","tileMinimizing","tileMinimized"]
})
export class IgTileManagerComponent extends IgContentControlBase<IgTileManager> {
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }

	/**
 	 * Maximizes a given tile.
	 *
	 * @param $tileToMaximize Specifies the jQuery object of the tile element to be maximized.
	 * @param animDuration Specifies the animation duration for this maximizing.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public maximize($tileToMaximize: Object, animDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Minimizes the maximized tile. Has no effect if no maximized tile is present.
	 *
	 * @param animDuration Specifies the animation duration for this minimize.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public minimize(animDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Returns the maximized tile or null if such is not present.
	 * @return object|null Returns the maximized tile or null if such is not present.
	 */
	public maximizedTile(): Object { return; } ;

	/**
 	 * Returns an array with the tiles in minimized state or null if such are not present.
	 * @return object|null Returns an array with the tiles in minimized state or null if such are not present.
	 */
	public minimizedTiles(): Object { return; } ;

	/**
 	 * Returns the splitter associated with this tile manager or
	 *                 null if the tile manager was instantiated with maximizedTileIndex.
	 * @return object|null Returns the splitter associated with this tile manager or null if the tile manager was instantiated with maximizedTileIndex.
	 */
	public splitter(): Object { return; } ;

	/**
 	 * Returns the [layout manager](ui.iglayoutmanager) associated with current tile manager.
	 */
	public layoutManager(): Object { return; } ;

	/**
 	 * Reflow the tile manager. Rearranging the tiles to fit in the container
	 *
	 * @param forceReflow Indicates whether the reflow should be forced. Useful in cases where the items size and position was changed manually.
	 * @param animationDuration The animation duration to be used for this reflow only.
	 * @param event Indicates the browser even which triggered this action (not API).
	 */
	public reflow(forceReflow?: Object, animationDuration?: number, event?: Object): void { return; } ;

	/**
 	 * Returns the element that represents this widget.
	 */
	public widget(): Object { return; } ;

	/**
 	 * Causes the TileManager to data bind to the data source (local or remote) , and re-render all of the data as well.
	 */
	public dataBind(): void { return; } ;

	/**
 	 * Deletes the widget instance (client object). It is no longer accessible and all its event handlers stop working. Destroys all child widgets. Removes auto-generated HTML content, which is outside the widget, e.g. detached popups, dropdowns, etc.
	 */
	public destroy(): Object { return; } ;
}