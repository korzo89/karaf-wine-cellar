package org.karaf.winecellar.itests;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.karaf.winecellar.dao.GeneralDAO;
import org.karaf.winecellar.eventbroker.impl.model.ModelHandler;
import org.karaf.winecellar.eventbroker.impl.model.ModelListener;
import org.karaf.winecellar.model.Wine;
import org.ops4j.pax.exam.junit.ExamReactorStrategy;
import org.ops4j.pax.exam.junit.PaxExam;
import org.ops4j.pax.exam.spi.reactors.PerClass;
import org.osgi.framework.BundleContext;
import org.osgi.service.event.EventAdmin;

import javax.inject.Inject;
import java.util.concurrent.CyclicBarrier;

import static org.junit.Assert.assertEquals;

@RunWith(PaxExam.class)
@ExamReactorStrategy(PerClass.class)
public class NotificationTest extends WineCellarTestSupport {

    @Inject
    GeneralDAO generalDAO;

    @Inject
    EventAdmin eventAdmin;

    @Inject
    BundleContext bc;

    @Test(timeout = 5000)
    public void checkModelNotifications() throws Exception {
        final CyclicBarrier gate = new CyclicBarrier(2);

        final Wine newWine = new Wine("New wine", "ENG", "", "Some wine");
        final String[] receivedClassName = new String[1];
        final Object[] receivedEntity = new Object[1];
        final String[] modifiedClassName = new String[1];
        final Object[] modifiedEntity = new Object[1];
        final String[] deletedClassName = new String[1];
        final long[] deletedId = new long[1];

        ModelHandler modelHandler = new ModelHandler(bc, new ModelListener() {
            @Override
            public void entityAdded(String className, Object entity) {
                try {
                    receivedClassName[0] = className;
                    receivedEntity[0] = entity;
                    gate.await();
                } catch (Exception e) {}
            }

            @Override
            public void entityUpdated(String className, Object entity) {
                try {
                    modifiedClassName[0] = className;
                    modifiedEntity[0] = entity;
                    gate.await();
                } catch (Exception e) {}
            }

            @Override
            public void entityDeleted(String className, long entityId) {
                try {
                    deletedClassName[0] = className;
                    deletedId[0] = entityId;
                    gate.await();
                } catch (Exception e) {}
            }
        }, Wine.class.getName());

        generalDAO.add(newWine);
        gate.await();
        assertEquals(receivedClassName[0], Wine.class.getName());
        assertEquals(((Wine) receivedEntity[0]).getName(), newWine.getName());

        gate.reset();
        newWine.setName("New name");
        generalDAO.update(newWine);
        gate.await();
        assertEquals(modifiedClassName[0], Wine.class.getName());
        assertEquals(((Wine) modifiedEntity[0]).getName(), "New name");

        gate.reset();
        long wineId = newWine.getId();
        generalDAO.removeById(Wine.class, wineId);
        gate.await();
        assertEquals(deletedClassName[0], Wine.class.getName());
        assertEquals(deletedId[0], wineId);
    }
}
