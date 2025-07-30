import { FigureIcon, RobotSmileIcon } from "@navikt/aksel-icons"
import { List, Tabs } from '@navikt/ds-react'
import { useState } from 'react'
import { useAppContext } from '../AppContext'

export const SkjermleserKommandoer = () => {
	const t = useAppContext().text.SkjermleserKommandoer
	const [open, setOpen] = useState(false)

	return (
		<div>
			<button
				className="meny-knapp"
				aria-expanded={open}
				data-state={open ? 'open' : 'closed'}
				onClick={() => {
					setOpen(!open)
				}}
			>
				{t.overskrift}
			</button>
			{open && (
				<div className="flex gap-4 p-4 border-l border-b border-r border-[#d8a33c] rounded-b-md">
					<Tabs
						defaultValue="voiceover"
						size="small"
						className="pt-2"
					>
						<Tabs.List>
							<Tabs.Tab
								value="voiceover"
								label="VoiceOver"
								icon={<FigureIcon aria-hidden />}
							/>
							<Tabs.Tab
								value="narrator"
								label="Narrator"
								icon={<RobotSmileIcon aria-hidden />}
							/>
						</Tabs.List>
						<Tabs.Panel value="voiceover">
							<List size="small">
								{t.voiceover.kommandoer.map((kommando) => (
									<ListItem
										key={kommando.label}
										label={kommando.label}
										value={kommando.value}
									/>
								))}
							</List>
						</Tabs.Panel>
						<Tabs.Panel value="narrator">
							<List size="small">
								{t.narrator.kommandoer.map((kommando) => (
									<ListItem
										key={kommando.label}
										label={kommando.label}
										value={kommando.value}
									/>
								))}
							</List>
						</Tabs.Panel>
					</Tabs>
				</div>
			)}
		</div>
	)
}

interface ListItemProps {
	label: string
	value: string
}
const ListItem = ({ label, value }: ListItemProps) => (
	<List.Item>
		<strong className="mr-2">{`${label}:`}</strong>
		{value}
	</List.Item>
)